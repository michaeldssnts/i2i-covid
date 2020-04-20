import cartoApi from 'utils/carto-api';

export const fakeData = [
  {
    covid_19_induced_behaviour_changes_wash_hands_more: 100,
    covid_19_induced_behaviour_changes_use_hand_sanitizer_more: 110,
    covid_19_induced_behaviour_changes_cover_mouth_when_cough_or_sn: 303,
    covid_19_induced_behaviour_changes_limit_contact_with_other_peo: 140,
    covid_19_induced_behaviour_changes_avoid_big_groups: 103,
    covid_19_induced_behaviour_changes_stay_home_more: 19,
    covid_19_induced_behaviour_changes_travel_outside_home_less: 73,
    covid_19_induced_behaviour_changes_go_to_work_less: 30,
    covid_19_induced_behaviour_changes_wear_face_mask: 57,
    covid_19_induced_behaviour_changes_stock_up_on_food: 193,
    covid_19_induced_behaviour_changes_avoid_the_clinic_or_hospital: 400,
    covid_19_induced_behaviour_changes_avoid_elderly: 278,
    covid_19_induced_behaviour_changes_other_specify: 239,
    covid_19_induced_behaviour_changes_don_t_know: 119,
    covid_19_induced_behaviour_changes_refused: 89,
    updated_at: '2020-04-17',
  },
  {
    covid_19_induced_behaviour_changes_wash_hands_more: 100,
    covid_19_induced_behaviour_changes_use_hand_sanitizer_more: 110,
    covid_19_induced_behaviour_changes_cover_mouth_when_cough_or_sn: 303,
    covid_19_induced_behaviour_changes_limit_contact_with_other_peo: 140,
    covid_19_induced_behaviour_changes_avoid_big_groups: 103,
    covid_19_induced_behaviour_changes_stay_home_more: 19,
    covid_19_induced_behaviour_changes_travel_outside_home_less: 73,
    covid_19_induced_behaviour_changes_go_to_work_less: 30,
    covid_19_induced_behaviour_changes_wear_face_mask: 57,
    covid_19_induced_behaviour_changes_stock_up_on_food: 193,
    covid_19_induced_behaviour_changes_avoid_the_clinic_or_hospital: 400,
    covid_19_induced_behaviour_changes_avoid_elderly: 278,
    covid_19_induced_behaviour_changes_other_specify: 239,
    covid_19_induced_behaviour_changes_don_t_know: 119,
    covid_19_induced_behaviour_changes_refused: 89,
    updated_at: '2020-04-24',
  },
  {
    covid_19_induced_behaviour_changes_wash_hands_more: 100,
    covid_19_induced_behaviour_changes_use_hand_sanitizer_more: 110,
    covid_19_induced_behaviour_changes_cover_mouth_when_cough_or_sn: 303,
    covid_19_induced_behaviour_changes_limit_contact_with_other_peo: 140,
    covid_19_induced_behaviour_changes_avoid_big_groups: 103,
    covid_19_induced_behaviour_changes_stay_home_more: 19,
    covid_19_induced_behaviour_changes_travel_outside_home_less: 73,
    covid_19_induced_behaviour_changes_go_to_work_less: 30,
    covid_19_induced_behaviour_changes_wear_face_mask: 57,
    covid_19_induced_behaviour_changes_stock_up_on_food: 193,
    covid_19_induced_behaviour_changes_avoid_the_clinic_or_hospital: 400,
    covid_19_induced_behaviour_changes_avoid_elderly: 278,
    covid_19_induced_behaviour_changes_other_specify: 239,
    covid_19_induced_behaviour_changes_don_t_know: 119,
    covid_19_induced_behaviour_changes_refused: 89,
    updated_at: '2020-05-4',
  },
  {
    covid_19_induced_behaviour_changes_wash_hands_more: 100,
    covid_19_induced_behaviour_changes_use_hand_sanitizer_more: 110,
    covid_19_induced_behaviour_changes_cover_mouth_when_cough_or_sn: 303,
    covid_19_induced_behaviour_changes_limit_contact_with_other_peo: 140,
    covid_19_induced_behaviour_changes_avoid_big_groups: 103,
    covid_19_induced_behaviour_changes_stay_home_more: 19,
    covid_19_induced_behaviour_changes_travel_outside_home_less: 73,
    covid_19_induced_behaviour_changes_go_to_work_less: 30,
    covid_19_induced_behaviour_changes_wear_face_mask: 57,
    covid_19_induced_behaviour_changes_stock_up_on_food: 193,
    covid_19_induced_behaviour_changes_avoid_the_clinic_or_hospital: 400,
    covid_19_induced_behaviour_changes_avoid_elderly: 278,
    covid_19_induced_behaviour_changes_other_specify: 239,
    covid_19_induced_behaviour_changes_don_t_know: 119,
    covid_19_induced_behaviour_changes_refused: 89,
    updated_at: '2020-05-11',
  },
];

export const fetchDataQuery = (columns) => {
  const groupingQuery = columns.map((column) => `GROUPING(${column}) grouping_${column}`).join(',');
  const selectQuery = columns.join(',');
  const groupByQuery = columns.map((column) => `(${column})`).join(',');
  const valuesQuery = columns.map((column) => `(r.${column}, '${column}', r.count)`).join(',');

  const query = `
    WITH r AS (
      SELECT
        ${groupingQuery},
        ${selectQuery},
        COUNT(cartodb_id)
      FROM covid_data_test
      GROUP BY GROUPING SETS (
        ${groupByQuery}
      )
    ),
    f AS (
      SELECT t.*
      FROM r
        CROSS JOIN LATERAL (
          VALUES ${valuesQuery}
        ) AS t(response, indicator, valuesw)
      WHERE response != 'N/A'
    )
    SELECT *,
      sum(valuesw) OVER (partition BY indicator) AS total
    FROM f
  `;

  return cartoApi(query);
};

export const parseData = () => fakeData;

export const fetchCategories = () => {
  const query = `
    SELECT
      name,
      slug
    FROM covid_categories`;
  return cartoApi(query);
};

export default { fetchDataQuery, fetchCategories, parseData };

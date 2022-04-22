<template>
  <div class="container-fluid">
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-auto col-sm-3">
              <h1 class="m-0">Imtihonlar</h1>
            </div>
            <div class="col-auto col-sm-9">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <a href="/admin/"
                    ><i class="fa fa-tachometer-alt"></i> Home</a
                  >
                </li>
                <li class="breadcrumb-item">
                  <a href="/admin/quizapp/">Quizapp</a>
                </li>
                <li class="breadcrumb-item active">Imtihonlar</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="container-fluid">
          <section id="content" class="content">
            <div class="row">
              <div class="col-12">
                <div class="card card-primary card-outline">
                  <div class="card-header">
                    <h4 class="card-title">Select exam to change</h4>
                    <div class="card-tools form-inline">
                      <form
                        id="changelist-search"
                        class="form-inline mt-2"
                        method="GET"
                      >
                        <div class="form-group">
                          <select
                            class="form-control search-filter"
                            style="width: 100%"
                            tabindex="-1"
                            aria-hidden="true"
                            data-name="subject"
                          >
                            <option value="">Kategoriya</option>
                            <option value="">---------</option>

                            <option data-name="subject__id__exact" value="6">
                              Arxiv 1 Variant
                            </option>

                            <option data-name="subject__id__exact" value="7">
                              TK 1 Variant
                            </option>

                            <option data-name="subject__id__exact" value="8">
                              Ijro Test 2 O&#x27;zbek
                            </option>

                            <option data-name="subject__id__exact" value="10">
                              Ijro Test 2 Rus
                            </option>

                            <option data-name="subject__id__exact" value="11">
                              Arxiv 2 Variant
                            </option>

                            <option data-name="subject__id__exact" value="12">
                              Arxiv 3 Variant
                            </option>

                            <option data-name="subject__id__exact" value="13">
                              TK 2 Variant
                            </option>

                            <option data-name="subject__id__exact" value="14">
                              Ijro Test 1 Rus
                            </option>

                            <option data-name="subject__id__exact" value="15">
                              Ijro Test 1 O&#x27;zbek
                            </option>

                            <option data-name="subject__id__exact" value="16">
                              IELTS
                            </option>

                            <option data-name="subject__id__exact" value="17">
                              TK 3- Variant
                            </option>
                          </select>
                        </div>

                        <div class="form-group" id="search_group">
                          <button
                            type="submit"
                            class="btn btn-outline-primary"
                            style="margin-right: 5px"
                          >
                            Izlash
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div class="card-body">
                    <form id="changelist-form" method="post" novalidate>
                      <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        value="N1IvO42MEIl0i25Glzg2DSguHD0E6anx389YUJzRwDW0X612PIpglrdN7u1QaEd6"
                      />
                      <div id="content-main">
                        <div class="module filtered" id="changelist">
                          <div class="row">
                            <div class="col-12">
                              <div class="row">
                                <div class="col-12 col-sm-8">
                                  <div class="actions">
                                    <label
                                      ><select name="action" required>
                                        <option value="" selected>
                                          ---------
                                        </option>

                                        <option value="delete_selected">
                                          Imtihonlar tanlanganlarni
                                          o&#x27;chirish
                                        </option>
                                      </select></label
                                    ><label
                                      ><input
                                        type="hidden"
                                        name="select_across"
                                        value="0"
                                        class="select-across"
                                    /></label>

                                    <button
                                      type="submit"
                                      class="btn btn-outline-primary"
                                      style="
                                        margin-right: 5px;
                                        margin-left: 15px;
                                      "
                                      title="Tanlangan faoliyatni ishga tushirish"
                                      name="index"
                                      value="0"
                                    >
                                      Go
                                    </button>

                                    <span
                                      class="action-counter"
                                      data-actions-icnt="4"
                                      >0 of 4 selected</span
                                    >
                                  </div>
                                </div>
                                <div class="col-12 col-sm-4">
                                  <a
                                    href="/admin/quizapp/exam/add/"
                                    class="btn btn-outline-success float-right"
                                  >
                                    <i class="fa fa-plus-circle"></i> &nbsp;
                                    Imtihon qo'shish
                                  </a>
                                </div>
                              </div>
                              <hr />

                              <div class="card">
                                <div class="card-body table-responsive p-0">
                                  <table
                                    id="result_list"
                                    class="table table-striped mb-0"
                                  >
                                    <thead>
                                      <tr>
                                        <th
                                          class="djn-checkbox-select-all"
                                          tabindex="0"
                                          rowspan="1"
                                          colspan="1"
                                        >
                                          <div class="text">
                                            <span
                                              ><input
                                                type="checkbox"
                                                id="action-toggle"
                                            /></span>
                                          </div>
                                        </th>

                                        <th
                                          class="sorting"
                                          tabindex="0"
                                          rowspan="1"
                                          colspan="1"
                                        >
                                          <div class="text">
                                            <a href="?o=1">ID</a>
                                          </div>
                                        </th>

                                        <th
                                          class="sorting"
                                          tabindex="0"
                                          rowspan="1"
                                          colspan="1"
                                        >
                                          <div class="text">
                                            <a href="?o=2">Kategoriya</a>
                                          </div>
                                        </th>

                                        <th
                                          class="sorting"
                                          tabindex="0"
                                          rowspan="1"
                                          colspan="1"
                                        >
                                          <div class="text">
                                            <a href="?o=3">Ochilish sanasi</a>
                                          </div>
                                        </th>

                                        <th
                                          class="sorting"
                                          tabindex="0"
                                          rowspan="1"
                                          colspan="1"
                                        >
                                          <div class="text">
                                            <a href="?o=4">Davomiyligi</a>
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr role="row" class="even">
                                        <td class="action-checkbox">
                                          <input
                                            type="checkbox"
                                            name="_selected_action"
                                            value="18"
                                            class="action-select"
                                          />
                                        </td>
                                        <td class="field-id">18</td>
                                        <th class="field-subject nowrap">
                                          <a
                                            href="/admin/quizapp/exam/18/change/"
                                            >TK 1 Variant</a
                                          >
                                        </th>
                                        <td class="field-start_date nowrap">
                                          19-Mart, 2022-yil 0:39
                                        </td>
                                        <td class="field-duration">30</td>
                                      </tr>

                                      <tr role="row" class="odd">
                                        <td class="action-checkbox">
                                          <input
                                            type="checkbox"
                                            name="_selected_action"
                                            value="17"
                                            class="action-select"
                                          />
                                        </td>
                                        <td class="field-id">17</td>
                                        <th class="field-subject nowrap">
                                          <a
                                            href="/admin/quizapp/exam/17/change/"
                                            >Ijro Test 1 Rus</a
                                          >
                                        </th>
                                        <td class="field-start_date nowrap">
                                          5-Mart, 2022-yil 0:21
                                        </td>
                                        <td class="field-duration">5</td>
                                      </tr>

                                      <tr role="row" class="even">
                                        <td class="action-checkbox">
                                          <input
                                            type="checkbox"
                                            name="_selected_action"
                                            value="16"
                                            class="action-select"
                                          />
                                        </td>
                                        <td class="field-id">16</td>
                                        <th class="field-subject nowrap">
                                          <a
                                            href="/admin/quizapp/exam/16/change/"
                                            >Arxiv 2 Variant</a
                                          >
                                        </th>
                                        <td class="field-start_date nowrap">
                                          4-Mart, 2022-yil 16:30
                                        </td>
                                        <td class="field-duration">30</td>
                                      </tr>

                                      <tr role="row" class="odd">
                                        <td class="action-checkbox">
                                          <input
                                            type="checkbox"
                                            name="_selected_action"
                                            value="13"
                                            class="action-select"
                                          />
                                        </td>
                                        <td class="field-id">13</td>
                                        <th class="field-subject nowrap">
                                          <a
                                            href="/admin/quizapp/exam/13/change/"
                                            >TK 3- Variant</a
                                          >
                                        </th>
                                        <td class="field-start_date nowrap">
                                          4-Mart, 2022-yil 15:25
                                        </td>
                                        <td class="field-duration">30</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-5">
                              <div
                                class="dataTables_info"
                                role="status"
                                aria-live="polite"
                              >
                                4 Imtihonlar
                              </div>
                            </div>

                            <div class="col-7">
                              <ul
                                class="pagination pagination-sm m-0 float-right"
                              ></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <br class="clear" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;
  position: relative;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
form {
  display: flex;
  align-items: center;
}
</style>

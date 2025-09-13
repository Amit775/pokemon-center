import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguagesOrderByWithAggregationInput } from "../../../inputs/LanguagesOrderByWithAggregationInput";
import { LanguagesScalarWhereWithAggregatesInput } from "../../../inputs/LanguagesScalarWhereWithAggregatesInput";
import { LanguagesWhereInput } from "../../../inputs/LanguagesWhereInput";
import { LanguagesScalarFieldEnum } from "../../../../enums/LanguagesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLanguagesArgs {
  @TypeGraphQL.Field(_type => LanguagesWhereInput, {
    nullable: true
  })
  where?: LanguagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LanguagesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LanguagesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguagesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "iso639" | "iso3166" | "identifier" | "official" | "order">;

  @TypeGraphQL.Field(_type => LanguagesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LanguagesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

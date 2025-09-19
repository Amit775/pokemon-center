import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboWhereInput } from "../inputs/SuperContestComboWhereInput";

@TypeGraphQL.InputType("SuperContestComboListRelationFilter", {})
export class SuperContestComboListRelationFilter {
  @TypeGraphQL.Field(_type => SuperContestComboWhereInput, {
    nullable: true
  })
  every?: SuperContestComboWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboWhereInput, {
    nullable: true
  })
  some?: SuperContestComboWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboWhereInput, {
    nullable: true
  })
  none?: SuperContestComboWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosWhereInput } from "../inputs/SuperContestCombosWhereInput";

@TypeGraphQL.InputType("SuperContestCombosListRelationFilter", {})
export class SuperContestCombosListRelationFilter {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereInput, {
    nullable: true
  })
  every?: SuperContestCombosWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosWhereInput, {
    nullable: true
  })
  some?: SuperContestCombosWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosWhereInput, {
    nullable: true
  })
  none?: SuperContestCombosWhereInput | undefined;
}

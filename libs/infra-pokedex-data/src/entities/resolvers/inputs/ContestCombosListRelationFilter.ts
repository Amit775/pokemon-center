import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosWhereInput } from "../inputs/ContestCombosWhereInput";

@TypeGraphQL.InputType("ContestCombosListRelationFilter", {})
export class ContestCombosListRelationFilter {
  @TypeGraphQL.Field(_type => ContestCombosWhereInput, {
    nullable: true
  })
  every?: ContestCombosWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestCombosWhereInput, {
    nullable: true
  })
  some?: ContestCombosWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestCombosWhereInput, {
    nullable: true
  })
  none?: ContestCombosWhereInput | undefined;
}

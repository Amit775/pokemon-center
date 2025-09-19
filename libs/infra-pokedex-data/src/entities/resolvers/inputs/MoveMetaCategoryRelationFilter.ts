import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoryWhereInput } from "../inputs/MoveMetaCategoryWhereInput";

@TypeGraphQL.InputType("MoveMetaCategoryRelationFilter", {})
export class MoveMetaCategoryRelationFilter {
  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereInput, {
    nullable: true
  })
  is?: MoveMetaCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereInput, {
    nullable: true
  })
  isNot?: MoveMetaCategoryWhereInput | undefined;
}

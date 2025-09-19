import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaUpdateManyWithoutMetaCategoryNestedInput } from "../inputs/MoveMetaUpdateManyWithoutMetaCategoryNestedInput";

@TypeGraphQL.InputType("MoveMetaCategoryUpdateInput", {})
export class MoveMetaCategoryUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => MoveMetaUpdateManyWithoutMetaCategoryNestedInput, {
    nullable: true
  })
  meta?: MoveMetaUpdateManyWithoutMetaCategoryNestedInput | undefined;
}

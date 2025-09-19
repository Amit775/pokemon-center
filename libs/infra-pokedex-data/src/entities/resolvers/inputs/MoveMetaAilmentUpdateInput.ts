import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaUpdateManyWithoutMetaAilmentNestedInput } from "../inputs/MoveMetaUpdateManyWithoutMetaAilmentNestedInput";

@TypeGraphQL.InputType("MoveMetaAilmentUpdateInput", {})
export class MoveMetaAilmentUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => MoveMetaUpdateManyWithoutMetaAilmentNestedInput, {
    nullable: true
  })
  meta?: MoveMetaUpdateManyWithoutMetaAilmentNestedInput | undefined;
}

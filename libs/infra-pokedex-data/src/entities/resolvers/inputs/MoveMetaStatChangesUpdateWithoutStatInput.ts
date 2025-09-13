import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput } from "../inputs/MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput";
import { MovesUpdateOneRequiredWithoutMetaStatChangesNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutMetaStatChangesNestedInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpdateWithoutStatInput", {})
export class MoveMetaStatChangesUpdateWithoutStatInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  change?: number | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutMetaStatChangesNestedInput, {
    nullable: true
  })
  move?: MovesUpdateOneRequiredWithoutMetaStatChangesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput, {
    nullable: true
  })
  meta?: MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput | undefined;
}

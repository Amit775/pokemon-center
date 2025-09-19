import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateOneRequiredWithoutMetaStatChangesNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutMetaStatChangesNestedInput";
import { StatUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput } from "../inputs/StatUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpdateWithoutMetaInput", {})
export class MoveMetaStatChangesUpdateWithoutMetaInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  change?: number | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutMetaStatChangesNestedInput, {
    nullable: true
  })
  move?: MoveUpdateOneRequiredWithoutMetaStatChangesNestedInput | undefined;

  @TypeGraphQL.Field(_type => StatUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput, {
    nullable: true
  })
  stat?: StatUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput | undefined;
}

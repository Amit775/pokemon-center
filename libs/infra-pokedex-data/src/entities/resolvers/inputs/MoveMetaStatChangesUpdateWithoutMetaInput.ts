import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateOneRequiredWithoutMetaStatChangesNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutMetaStatChangesNestedInput";
import { StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput } from "../inputs/StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpdateWithoutMetaInput", {})
export class MoveMetaStatChangesUpdateWithoutMetaInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  change?: number | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutMetaStatChangesNestedInput, {
    nullable: true
  })
  move?: MovesUpdateOneRequiredWithoutMetaStatChangesNestedInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput, {
    nullable: true
  })
  stat?: StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput | undefined;
}

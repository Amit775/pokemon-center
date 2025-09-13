import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput } from "../inputs/MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput";
import { StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput } from "../inputs/StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpdateWithoutMoveInput", {})
export class MoveMetaStatChangesUpdateWithoutMoveInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  change?: number | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput, {
    nullable: true
  })
  stat?: StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput, {
    nullable: true
  })
  meta?: MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput | undefined;
}

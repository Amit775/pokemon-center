import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedOneWithoutMetaStatChangesInput } from "../inputs/MovesCreateNestedOneWithoutMetaStatChangesInput";
import { StatsCreateNestedOneWithoutMoveMetaStatChangesInput } from "../inputs/StatsCreateNestedOneWithoutMoveMetaStatChangesInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateWithoutMetaInput", {})
export class MoveMetaStatChangesCreateWithoutMetaInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  change!: number;

  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutMetaStatChangesInput, {
    nullable: false
  })
  move!: MovesCreateNestedOneWithoutMetaStatChangesInput;

  @TypeGraphQL.Field(_type => StatsCreateNestedOneWithoutMoveMetaStatChangesInput, {
    nullable: false
  })
  stat!: StatsCreateNestedOneWithoutMoveMetaStatChangesInput;
}

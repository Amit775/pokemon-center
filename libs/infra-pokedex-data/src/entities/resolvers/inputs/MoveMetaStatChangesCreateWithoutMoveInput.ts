import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateNestedOneWithoutStatChangesInput } from "../inputs/MoveMetaCreateNestedOneWithoutStatChangesInput";
import { StatsCreateNestedOneWithoutMoveMetaStatChangesInput } from "../inputs/StatsCreateNestedOneWithoutMoveMetaStatChangesInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateWithoutMoveInput", {})
export class MoveMetaStatChangesCreateWithoutMoveInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  change!: number;

  @TypeGraphQL.Field(_type => StatsCreateNestedOneWithoutMoveMetaStatChangesInput, {
    nullable: false
  })
  stat!: StatsCreateNestedOneWithoutMoveMetaStatChangesInput;

  @TypeGraphQL.Field(_type => MoveMetaCreateNestedOneWithoutStatChangesInput, {
    nullable: false
  })
  meta!: MoveMetaCreateNestedOneWithoutStatChangesInput;
}

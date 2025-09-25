import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateNestedOneWithoutMoveMetaStatChangesInput } from "../inputs/StatCreateNestedOneWithoutMoveMetaStatChangesInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateWithoutMetaInput", {})
export class MoveMetaStatChangesCreateWithoutMetaInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  change!: number;

  @TypeGraphQL.Field(_type => StatCreateNestedOneWithoutMoveMetaStatChangesInput, {
    nullable: false
  })
  stat!: StatCreateNestedOneWithoutMoveMetaStatChangesInput;
}

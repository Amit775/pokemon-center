import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutMetaStatChangesInput } from "../inputs/MoveCreateNestedOneWithoutMetaStatChangesInput";
import { MoveMetaCreateNestedOneWithoutStatChangesInput } from "../inputs/MoveMetaCreateNestedOneWithoutStatChangesInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateWithoutStatInput", {})
export class MoveMetaStatChangesCreateWithoutStatInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  change!: number;

  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutMetaStatChangesInput, {
    nullable: false
  })
  move!: MoveCreateNestedOneWithoutMetaStatChangesInput;

  @TypeGraphQL.Field(_type => MoveMetaCreateNestedOneWithoutStatChangesInput, {
    nullable: false
  })
  meta!: MoveMetaCreateNestedOneWithoutStatChangesInput;
}

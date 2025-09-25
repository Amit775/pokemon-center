import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateNestedOneWithoutStatChangesInput } from "../inputs/MoveMetaCreateNestedOneWithoutStatChangesInput";
import { StatCreateNestedOneWithoutMoveMetaStatChangesInput } from "../inputs/StatCreateNestedOneWithoutMoveMetaStatChangesInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateInput", {})
export class MoveMetaStatChangesCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  change!: number;

  @TypeGraphQL.Field(_type => StatCreateNestedOneWithoutMoveMetaStatChangesInput, {
    nullable: false
  })
  stat!: StatCreateNestedOneWithoutMoveMetaStatChangesInput;

  @TypeGraphQL.Field(_type => MoveMetaCreateNestedOneWithoutStatChangesInput, {
    nullable: false
  })
  meta!: MoveMetaCreateNestedOneWithoutStatChangesInput;
}

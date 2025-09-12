import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateWithoutMoveInput } from "../inputs/MoveMetaStatChangesCreateWithoutMoveInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateOrConnectWithoutMoveInput", {})
export class MoveMetaStatChangesCreateOrConnectWithoutMoveInput {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaStatChangesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateWithoutMoveInput, {
    nullable: false
  })
  create!: MoveMetaStatChangesCreateWithoutMoveInput;
}

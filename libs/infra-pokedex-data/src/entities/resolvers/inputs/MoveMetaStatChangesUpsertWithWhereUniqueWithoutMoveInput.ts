import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateWithoutMoveInput } from "../inputs/MoveMetaStatChangesCreateWithoutMoveInput";
import { MoveMetaStatChangesUpdateWithoutMoveInput } from "../inputs/MoveMetaStatChangesUpdateWithoutMoveInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpsertWithWhereUniqueWithoutMoveInput", {})
export class MoveMetaStatChangesUpsertWithWhereUniqueWithoutMoveInput {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaStatChangesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesUpdateWithoutMoveInput, {
    nullable: false
  })
  update!: MoveMetaStatChangesUpdateWithoutMoveInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateWithoutMoveInput, {
    nullable: false
  })
  create!: MoveMetaStatChangesCreateWithoutMoveInput;
}

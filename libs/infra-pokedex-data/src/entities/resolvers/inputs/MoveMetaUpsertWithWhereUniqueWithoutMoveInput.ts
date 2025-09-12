import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateWithoutMoveInput } from "../inputs/MoveMetaCreateWithoutMoveInput";
import { MoveMetaUpdateWithoutMoveInput } from "../inputs/MoveMetaUpdateWithoutMoveInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaUpsertWithWhereUniqueWithoutMoveInput", {})
export class MoveMetaUpsertWithWhereUniqueWithoutMoveInput {
  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaUpdateWithoutMoveInput, {
    nullable: false
  })
  update!: MoveMetaUpdateWithoutMoveInput;

  @TypeGraphQL.Field(_type => MoveMetaCreateWithoutMoveInput, {
    nullable: false
  })
  create!: MoveMetaCreateWithoutMoveInput;
}

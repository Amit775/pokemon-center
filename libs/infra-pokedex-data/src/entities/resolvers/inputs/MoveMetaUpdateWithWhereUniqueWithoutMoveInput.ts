import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaUpdateWithoutMoveInput } from "../inputs/MoveMetaUpdateWithoutMoveInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaUpdateWithWhereUniqueWithoutMoveInput", {})
export class MoveMetaUpdateWithWhereUniqueWithoutMoveInput {
  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaUpdateWithoutMoveInput, {
    nullable: false
  })
  data!: MoveMetaUpdateWithoutMoveInput;
}

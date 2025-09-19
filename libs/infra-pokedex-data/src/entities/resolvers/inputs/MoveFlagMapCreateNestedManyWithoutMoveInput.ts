import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapCreateManyMoveInputEnvelope } from "../inputs/MoveFlagMapCreateManyMoveInputEnvelope";
import { MoveFlagMapCreateOrConnectWithoutMoveInput } from "../inputs/MoveFlagMapCreateOrConnectWithoutMoveInput";
import { MoveFlagMapCreateWithoutMoveInput } from "../inputs/MoveFlagMapCreateWithoutMoveInput";
import { MoveFlagMapWhereUniqueInput } from "../inputs/MoveFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagMapCreateNestedManyWithoutMoveInput", {})
export class MoveFlagMapCreateNestedManyWithoutMoveInput {
  @TypeGraphQL.Field(_type => [MoveFlagMapCreateWithoutMoveInput], {
    nullable: true
  })
  create?: MoveFlagMapCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: MoveFlagMapCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: MoveFlagMapCreateManyMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveFlagMapWhereUniqueInput[] | undefined;
}

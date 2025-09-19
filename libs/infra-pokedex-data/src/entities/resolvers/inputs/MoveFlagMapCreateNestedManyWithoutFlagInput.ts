import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapCreateManyFlagInputEnvelope } from "../inputs/MoveFlagMapCreateManyFlagInputEnvelope";
import { MoveFlagMapCreateOrConnectWithoutFlagInput } from "../inputs/MoveFlagMapCreateOrConnectWithoutFlagInput";
import { MoveFlagMapCreateWithoutFlagInput } from "../inputs/MoveFlagMapCreateWithoutFlagInput";
import { MoveFlagMapWhereUniqueInput } from "../inputs/MoveFlagMapWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagMapCreateNestedManyWithoutFlagInput", {})
export class MoveFlagMapCreateNestedManyWithoutFlagInput {
  @TypeGraphQL.Field(_type => [MoveFlagMapCreateWithoutFlagInput], {
    nullable: true
  })
  create?: MoveFlagMapCreateWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapCreateOrConnectWithoutFlagInput], {
    nullable: true
  })
  connectOrCreate?: MoveFlagMapCreateOrConnectWithoutFlagInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapCreateManyFlagInputEnvelope, {
    nullable: true
  })
  createMany?: MoveFlagMapCreateManyFlagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveFlagMapWhereUniqueInput[] | undefined;
}

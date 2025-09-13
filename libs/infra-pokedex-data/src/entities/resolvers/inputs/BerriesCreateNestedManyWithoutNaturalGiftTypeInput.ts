import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateManyNaturalGiftTypeInputEnvelope } from "../inputs/BerriesCreateManyNaturalGiftTypeInputEnvelope";
import { BerriesCreateOrConnectWithoutNaturalGiftTypeInput } from "../inputs/BerriesCreateOrConnectWithoutNaturalGiftTypeInput";
import { BerriesCreateWithoutNaturalGiftTypeInput } from "../inputs/BerriesCreateWithoutNaturalGiftTypeInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesCreateNestedManyWithoutNaturalGiftTypeInput", {})
export class BerriesCreateNestedManyWithoutNaturalGiftTypeInput {
  @TypeGraphQL.Field(_type => [BerriesCreateWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  create?: BerriesCreateWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesCreateOrConnectWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  connectOrCreate?: BerriesCreateOrConnectWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BerriesCreateManyNaturalGiftTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BerriesCreateManyNaturalGiftTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  connect?: BerriesWhereUniqueInput[] | undefined;
}

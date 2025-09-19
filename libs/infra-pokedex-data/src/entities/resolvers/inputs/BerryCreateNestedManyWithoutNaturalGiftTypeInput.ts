import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateManyNaturalGiftTypeInputEnvelope } from "../inputs/BerryCreateManyNaturalGiftTypeInputEnvelope";
import { BerryCreateOrConnectWithoutNaturalGiftTypeInput } from "../inputs/BerryCreateOrConnectWithoutNaturalGiftTypeInput";
import { BerryCreateWithoutNaturalGiftTypeInput } from "../inputs/BerryCreateWithoutNaturalGiftTypeInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryCreateNestedManyWithoutNaturalGiftTypeInput", {})
export class BerryCreateNestedManyWithoutNaturalGiftTypeInput {
  @TypeGraphQL.Field(_type => [BerryCreateWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  create?: BerryCreateWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryCreateOrConnectWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  connectOrCreate?: BerryCreateOrConnectWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryCreateManyNaturalGiftTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BerryCreateManyNaturalGiftTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryWhereUniqueInput[] | undefined;
}

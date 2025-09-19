import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateWithoutNaturalGiftTypeInput } from "../inputs/BerryCreateWithoutNaturalGiftTypeInput";
import { BerryUpdateWithoutNaturalGiftTypeInput } from "../inputs/BerryUpdateWithoutNaturalGiftTypeInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryUpsertWithWhereUniqueWithoutNaturalGiftTypeInput", {})
export class BerryUpsertWithWhereUniqueWithoutNaturalGiftTypeInput {
  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: false
  })
  where!: BerryWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryUpdateWithoutNaturalGiftTypeInput, {
    nullable: false
  })
  update!: BerryUpdateWithoutNaturalGiftTypeInput;

  @TypeGraphQL.Field(_type => BerryCreateWithoutNaturalGiftTypeInput, {
    nullable: false
  })
  create!: BerryCreateWithoutNaturalGiftTypeInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryUpdateWithoutNaturalGiftTypeInput } from "../inputs/BerryUpdateWithoutNaturalGiftTypeInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryUpdateWithWhereUniqueWithoutNaturalGiftTypeInput", {})
export class BerryUpdateWithWhereUniqueWithoutNaturalGiftTypeInput {
  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: false
  })
  where!: BerryWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryUpdateWithoutNaturalGiftTypeInput, {
    nullable: false
  })
  data!: BerryUpdateWithoutNaturalGiftTypeInput;
}

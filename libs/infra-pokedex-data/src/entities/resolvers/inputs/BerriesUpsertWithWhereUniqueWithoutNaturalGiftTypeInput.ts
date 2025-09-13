import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateWithoutNaturalGiftTypeInput } from "../inputs/BerriesCreateWithoutNaturalGiftTypeInput";
import { BerriesUpdateWithoutNaturalGiftTypeInput } from "../inputs/BerriesUpdateWithoutNaturalGiftTypeInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput", {})
export class BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput {
  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: false
  })
  where!: BerriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerriesUpdateWithoutNaturalGiftTypeInput, {
    nullable: false
  })
  update!: BerriesUpdateWithoutNaturalGiftTypeInput;

  @TypeGraphQL.Field(_type => BerriesCreateWithoutNaturalGiftTypeInput, {
    nullable: false
  })
  create!: BerriesCreateWithoutNaturalGiftTypeInput;
}

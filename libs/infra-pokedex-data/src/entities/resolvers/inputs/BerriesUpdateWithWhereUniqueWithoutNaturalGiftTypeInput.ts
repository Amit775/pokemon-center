import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesUpdateWithoutNaturalGiftTypeInput } from "../inputs/BerriesUpdateWithoutNaturalGiftTypeInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput", {})
export class BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput {
  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: false
  })
  where!: BerriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerriesUpdateWithoutNaturalGiftTypeInput, {
    nullable: false
  })
  data!: BerriesUpdateWithoutNaturalGiftTypeInput;
}

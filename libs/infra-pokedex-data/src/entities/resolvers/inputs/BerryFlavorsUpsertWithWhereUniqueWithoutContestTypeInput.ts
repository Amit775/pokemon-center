import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateWithoutContestTypeInput } from "../inputs/BerryFlavorsCreateWithoutContestTypeInput";
import { BerryFlavorsUpdateWithoutContestTypeInput } from "../inputs/BerryFlavorsUpdateWithoutContestTypeInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput", {})
export class BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorsUpdateWithoutContestTypeInput, {
    nullable: false
  })
  update!: BerryFlavorsUpdateWithoutContestTypeInput;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateWithoutContestTypeInput, {
    nullable: false
  })
  create!: BerryFlavorsCreateWithoutContestTypeInput;
}

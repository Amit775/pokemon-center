import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateWithoutItemInput } from "../inputs/BerryCreateWithoutItemInput";
import { BerryUpdateWithoutItemInput } from "../inputs/BerryUpdateWithoutItemInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryUpsertWithWhereUniqueWithoutItemInput", {})
export class BerryUpsertWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: false
  })
  where!: BerryWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryUpdateWithoutItemInput, {
    nullable: false
  })
  update!: BerryUpdateWithoutItemInput;

  @TypeGraphQL.Field(_type => BerryCreateWithoutItemInput, {
    nullable: false
  })
  create!: BerryCreateWithoutItemInput;
}

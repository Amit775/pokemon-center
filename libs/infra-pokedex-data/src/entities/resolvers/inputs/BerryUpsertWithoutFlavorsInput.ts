import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateWithoutFlavorsInput } from "../inputs/BerryCreateWithoutFlavorsInput";
import { BerryUpdateWithoutFlavorsInput } from "../inputs/BerryUpdateWithoutFlavorsInput";
import { BerryWhereInput } from "../inputs/BerryWhereInput";

@TypeGraphQL.InputType("BerryUpsertWithoutFlavorsInput", {})
export class BerryUpsertWithoutFlavorsInput {
  @TypeGraphQL.Field(_type => BerryUpdateWithoutFlavorsInput, {
    nullable: false
  })
  update!: BerryUpdateWithoutFlavorsInput;

  @TypeGraphQL.Field(_type => BerryCreateWithoutFlavorsInput, {
    nullable: false
  })
  create!: BerryCreateWithoutFlavorsInput;

  @TypeGraphQL.Field(_type => BerryWhereInput, {
    nullable: true
  })
  where?: BerryWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateWithoutItemInput } from "../inputs/BerryCreateWithoutItemInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryCreateOrConnectWithoutItemInput", {})
export class BerryCreateOrConnectWithoutItemInput {
  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: false
  })
  where!: BerryWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryCreateWithoutItemInput, {
    nullable: false
  })
  create!: BerryCreateWithoutItemInput;
}

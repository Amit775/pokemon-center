import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryUpdateWithoutItemInput } from "../inputs/BerryUpdateWithoutItemInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryUpdateWithWhereUniqueWithoutItemInput", {})
export class BerryUpdateWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => BerryWhereUniqueInput, {
    nullable: false
  })
  where!: BerryWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryUpdateWithoutItemInput, {
    nullable: false
  })
  data!: BerryUpdateWithoutItemInput;
}

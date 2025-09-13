import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateManyBerryInput } from "../inputs/BerryFlavorsCreateManyBerryInput";

@TypeGraphQL.InputType("BerryFlavorsCreateManyBerryInputEnvelope", {})
export class BerryFlavorsCreateManyBerryInputEnvelope {
  @TypeGraphQL.Field(_type => [BerryFlavorsCreateManyBerryInput], {
    nullable: false
  })
  data!: BerryFlavorsCreateManyBerryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

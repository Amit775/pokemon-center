import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateManyTypeInput } from "../inputs/BerryFlavorsCreateManyTypeInput";

@TypeGraphQL.InputType("BerryFlavorsCreateManyTypeInputEnvelope", {})
export class BerryFlavorsCreateManyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [BerryFlavorsCreateManyTypeInput], {
    nullable: false
  })
  data!: BerryFlavorsCreateManyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

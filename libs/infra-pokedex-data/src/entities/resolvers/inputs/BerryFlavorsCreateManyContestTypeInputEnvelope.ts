import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateManyContestTypeInput } from "../inputs/BerryFlavorsCreateManyContestTypeInput";

@TypeGraphQL.InputType("BerryFlavorsCreateManyContestTypeInputEnvelope", {})
export class BerryFlavorsCreateManyContestTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [BerryFlavorsCreateManyContestTypeInput], {
    nullable: false
  })
  data!: BerryFlavorsCreateManyContestTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

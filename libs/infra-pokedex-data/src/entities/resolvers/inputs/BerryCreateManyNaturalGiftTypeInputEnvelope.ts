import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateManyNaturalGiftTypeInput } from "../inputs/BerryCreateManyNaturalGiftTypeInput";

@TypeGraphQL.InputType("BerryCreateManyNaturalGiftTypeInputEnvelope", {})
export class BerryCreateManyNaturalGiftTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [BerryCreateManyNaturalGiftTypeInput], {
    nullable: false
  })
  data!: BerryCreateManyNaturalGiftTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

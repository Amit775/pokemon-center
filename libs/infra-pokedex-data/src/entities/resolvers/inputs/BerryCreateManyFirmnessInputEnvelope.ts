import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateManyFirmnessInput } from "../inputs/BerryCreateManyFirmnessInput";

@TypeGraphQL.InputType("BerryCreateManyFirmnessInputEnvelope", {})
export class BerryCreateManyFirmnessInputEnvelope {
  @TypeGraphQL.Field(_type => [BerryCreateManyFirmnessInput], {
    nullable: false
  })
  data!: BerryCreateManyFirmnessInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

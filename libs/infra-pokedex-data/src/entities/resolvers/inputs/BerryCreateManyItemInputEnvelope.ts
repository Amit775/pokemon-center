import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateManyItemInput } from "../inputs/BerryCreateManyItemInput";

@TypeGraphQL.InputType("BerryCreateManyItemInputEnvelope", {})
export class BerryCreateManyItemInputEnvelope {
  @TypeGraphQL.Field(_type => [BerryCreateManyItemInput], {
    nullable: false
  })
  data!: BerryCreateManyItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

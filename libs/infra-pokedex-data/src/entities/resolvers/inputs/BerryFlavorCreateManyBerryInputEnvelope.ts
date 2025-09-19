import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateManyBerryInput } from "../inputs/BerryFlavorCreateManyBerryInput";

@TypeGraphQL.InputType("BerryFlavorCreateManyBerryInputEnvelope", {})
export class BerryFlavorCreateManyBerryInputEnvelope {
  @TypeGraphQL.Field(_type => [BerryFlavorCreateManyBerryInput], {
    nullable: false
  })
  data!: BerryFlavorCreateManyBerryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

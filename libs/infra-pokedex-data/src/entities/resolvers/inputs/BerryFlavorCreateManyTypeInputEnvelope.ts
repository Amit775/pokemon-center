import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateManyTypeInput } from "../inputs/BerryFlavorCreateManyTypeInput";

@TypeGraphQL.InputType("BerryFlavorCreateManyTypeInputEnvelope", {})
export class BerryFlavorCreateManyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [BerryFlavorCreateManyTypeInput], {
    nullable: false
  })
  data!: BerryFlavorCreateManyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

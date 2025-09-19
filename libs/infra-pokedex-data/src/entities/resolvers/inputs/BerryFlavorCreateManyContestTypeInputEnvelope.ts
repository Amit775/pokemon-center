import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateManyContestTypeInput } from "../inputs/BerryFlavorCreateManyContestTypeInput";

@TypeGraphQL.InputType("BerryFlavorCreateManyContestTypeInputEnvelope", {})
export class BerryFlavorCreateManyContestTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [BerryFlavorCreateManyContestTypeInput], {
    nullable: false
  })
  data!: BerryFlavorCreateManyContestTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

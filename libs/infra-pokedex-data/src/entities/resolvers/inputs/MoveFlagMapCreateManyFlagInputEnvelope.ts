import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapCreateManyFlagInput } from "../inputs/MoveFlagMapCreateManyFlagInput";

@TypeGraphQL.InputType("MoveFlagMapCreateManyFlagInputEnvelope", {})
export class MoveFlagMapCreateManyFlagInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveFlagMapCreateManyFlagInput], {
    nullable: false
  })
  data!: MoveFlagMapCreateManyFlagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

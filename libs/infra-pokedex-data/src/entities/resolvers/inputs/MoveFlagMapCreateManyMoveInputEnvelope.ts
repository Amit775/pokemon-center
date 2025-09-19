import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapCreateManyMoveInput } from "../inputs/MoveFlagMapCreateManyMoveInput";

@TypeGraphQL.InputType("MoveFlagMapCreateManyMoveInputEnvelope", {})
export class MoveFlagMapCreateManyMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveFlagMapCreateManyMoveInput], {
    nullable: false
  })
  data!: MoveFlagMapCreateManyMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

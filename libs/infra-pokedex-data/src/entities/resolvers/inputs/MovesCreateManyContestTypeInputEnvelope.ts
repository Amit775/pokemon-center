import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyContestTypeInput } from "../inputs/MovesCreateManyContestTypeInput";

@TypeGraphQL.InputType("MovesCreateManyContestTypeInputEnvelope", {})
export class MovesCreateManyContestTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [MovesCreateManyContestTypeInput], {
    nullable: false
  })
  data!: MovesCreateManyContestTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

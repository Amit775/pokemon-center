import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyTypeInput } from "../inputs/MovesCreateManyTypeInput";

@TypeGraphQL.InputType("MovesCreateManyTypeInputEnvelope", {})
export class MovesCreateManyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [MovesCreateManyTypeInput], {
    nullable: false
  })
  data!: MovesCreateManyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyTargetInput } from "../inputs/MovesCreateManyTargetInput";

@TypeGraphQL.InputType("MovesCreateManyTargetInputEnvelope", {})
export class MovesCreateManyTargetInputEnvelope {
  @TypeGraphQL.Field(_type => [MovesCreateManyTargetInput], {
    nullable: false
  })
  data!: MovesCreateManyTargetInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

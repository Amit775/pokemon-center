import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyDamageClassInput } from "../inputs/MovesCreateManyDamageClassInput";

@TypeGraphQL.InputType("MovesCreateManyDamageClassInputEnvelope", {})
export class MovesCreateManyDamageClassInputEnvelope {
  @TypeGraphQL.Field(_type => [MovesCreateManyDamageClassInput], {
    nullable: false
  })
  data!: MovesCreateManyDamageClassInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

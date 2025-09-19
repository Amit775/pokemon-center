import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyContestTypeInput } from "../inputs/MoveCreateManyContestTypeInput";

@TypeGraphQL.InputType("MoveCreateManyContestTypeInputEnvelope", {})
export class MoveCreateManyContestTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveCreateManyContestTypeInput], {
    nullable: false
  })
  data!: MoveCreateManyContestTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

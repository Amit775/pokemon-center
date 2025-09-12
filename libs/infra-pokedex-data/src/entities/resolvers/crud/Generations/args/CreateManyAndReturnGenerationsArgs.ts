import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationsCreateManyInput } from "../../../inputs/GenerationsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnGenerationsArgs {
  @TypeGraphQL.Field(_type => [GenerationsCreateManyInput], {
    nullable: false
  })
  data!: GenerationsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

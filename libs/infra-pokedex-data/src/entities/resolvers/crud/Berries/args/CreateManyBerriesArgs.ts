import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerriesCreateManyInput } from "../../../inputs/BerriesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBerriesArgs {
  @TypeGraphQL.Field(_type => [BerriesCreateManyInput], {
    nullable: false
  })
  data!: BerriesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
